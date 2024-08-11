"use client";
import React, { useState } from "react";
import { TableCell, TableRow, TableBody } from "./ui/table";
import VideoItem from "./VideoItem";

export default function videoBody({
  videos,
}: {
  videos: { _id: string; command: string; response: string }[];
}) {
  const [videoList, setVideoList] = useState(videos);
  const deleteRecipeListItem = (i: number) =>
    setVideoList(videoList.filter((_, index) => index !== i));
  return (
    <TableBody>
      {videoList.map((video, i) => (
        <TableRow key={video._id}>
          <TableCell className="font-medium">{video._id}</TableCell>
          <VideoItem video={video} deleteThis={() => deleteRecipeListItem(i)} />
        </TableRow>
      ))}
    </TableBody>
  );
}
