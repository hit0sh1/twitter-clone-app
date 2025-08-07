"use client";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const RecentPost = () => {
  const [content, setContent] = useState<string>("");
  const [handle, setHandle] = useState<string>("");
  const queryClient = useQueryClient();

  const { data: posts, isPending: isLoadingPosts } = useQuery({
    queryKey: ["get-posts"],
    queryFn: async () => {
      const res = await client.post.all.$get();
      return await res.json();
    },
  });

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: async ({ content, handle }: { content: string; handle: string }) => {
      const res = await client.post.create.$post({ content, handle, image: null });
      return await res.json();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["get-posts"] });
      setContent("");
    },
  });

  return (
    <div className="w-full max-w-sm backdrop-blur-lg bg-black/15 px-8 py-6 rounded-md text-zinc-100/75 space-y-2">
      {isLoadingPosts ? (
        <p className="text-[#ececf399] text-base/6">Loading posts...</p>
      ) : posts && posts.length > 0 && posts[0] ? (
        <p className="text-[#ececf399] text-base/6">Your recent post: "{posts[0].content}"</p>
      ) : (
        <p className="text-[#ececf399] text-base/6">You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (content && handle) createPost({ content, handle });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (content && handle) createPost({ content, handle });
          }
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter your handle..."
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="w-full text-base/6 rounded-md bg-black/50 hover:bg-black/75 focus-visible:outline-none ring-2 ring-transparent  hover:ring-zinc-800 focus:ring-zinc-800 focus:bg-black/75 transition h-12 px-4 py-2 text-zinc-100"
        />
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full text-base/6 rounded-md bg-black/50 hover:bg-black/75 focus-visible:outline-none ring-2 ring-transparent  hover:ring-zinc-800 focus:ring-zinc-800 focus:bg-black/75 transition min-h-24 px-4 py-2 text-zinc-100 resize-none"
        />
        <Button disabled={isPending || !content || !handle} type="submit" variant="destructive">
          {isPending ? "Creating..." : "Create Post"}
        </Button>
      </form>
    </div>
  );
};
