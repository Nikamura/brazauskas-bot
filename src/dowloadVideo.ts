import { exec } from "child_process";
import { logger } from "./logger";
export function dowloadVideo(videoUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * Math.floor(1000000));

    exec(
      `youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' --output='tmp/${random}.mp4' ${videoUrl}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          reject(`stderr: ${stderr}`);
          return;
        }
        logger.info(stdout);
        resolve(`./tmp/${random}.mp4`);
      }
    );
  });
}
