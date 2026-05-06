import express, { type Express } from "express";
import fs from "fs";
import path from "path";

declare const __dirname: string;
const __dirnameResolved =
  typeof __dirname === "string"
    ? __dirname
    : path.resolve(process.cwd(), "server");

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirnameResolved, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use((_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
