import { exact, string, type Decoder } from "decoders";

interface Config {
  GOOGLE_ANALYTICS_MEASUREMENT_ID: string;
}

const configDecoder: Decoder<Config> = exact({
  GOOGLE_ANALYTICS_MEASUREMENT_ID: string,
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const config = {
  GOOGLE_ANALYTICS_MEASUREMENT_ID: import.meta.env
    .VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID,
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

export default configDecoder.verify(config);
