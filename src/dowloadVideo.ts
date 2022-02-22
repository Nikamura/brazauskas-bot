import { ChildProcess, exec } from "child_process";
import { logger } from "./logger";

export async function dowloadVideo(videoUrl: string): Promise<string> {
  const random = Math.floor(Math.random() * Math.floor(1000000));
  const command = `yt-dlp --recode-video mp4 -o "tmp/${random}.%(ext)s" ${videoUrl}`;
  logger.debug(`Executing command: ${command}`);

  const process = await new Promise<ChildProcess>((resolve, _reject) => {
    const childProcess = exec(command, (error, stdout, stderr) => {
      if (error) {
        logger.error(error);
      }
      if (stderr) {
        logger.error(stderr);
      }
      logger.info(stdout);
      resolve(childProcess);
    });
  });

  if (process.exitCode === 0) {
    return `./tmp/${random}.mp4`;
  }

  const responses = [process.stderr, process.stdout]
    .map((out) => JSON.stringify(out ?? "missing", null, 2))
    .join("\n");
  throw new Error(`Failed to dowload video: ${videoUrl} ${responses}`);
}

export function downloadSong(videoUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * Math.floor(1000000));

    exec(
      `yt-dlp --extract-audio --audio-format mp3 --embed-thumbnail --embed-metadata -o "tmp/${random}.%(ext)s" ${videoUrl}`,
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
        resolve(`./tmp/${random}.mp3`);
      }
    );
  });
}
