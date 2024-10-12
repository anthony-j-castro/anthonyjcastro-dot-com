import { useEffect, useRef, useState } from "react";
import portraitSrc from "./images/portrait.png";
import { Image } from "./styled";

const CONSTRAIN_LIMIT_IN_DEGREES = 2;
const TILT_DIVISOR = 20;
const HOVER_SCALE = 1.075;
const DEFAULT_TRANSFORM_STYLES = {
  rotateX: 0,
  rotateY: 0,
  scale: 1,
};
const TOUCHSCREEN_MEDIA_QUERY = window.matchMedia("(pointer: coarse)");

function constrain(n: number) {
  return Math.min(
    Math.max(n, -CONSTRAIN_LIMIT_IN_DEGREES),
    CONSTRAIN_LIMIT_IN_DEGREES,
  );
}

interface Props {
  className?: string;
}

const Portrait = ({ className }: Props) => {
  const portraitRef = useRef<HTMLImageElement>(null);

  const [transformStyles, setTransformStyles] = useState(
    DEFAULT_TRANSFORM_STYLES,
  );

  // This effect is mostly to handle switching between desktop and mobile
  // during development. It resets the portrait transform styles if we switch
  // to a touchscreen device.
  useEffect(() => {
    const handleTouchscreenMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setTransformStyles(DEFAULT_TRANSFORM_STYLES);
      }
    };

    TOUCHSCREEN_MEDIA_QUERY.addEventListener(
      "change",
      handleTouchscreenMediaQueryChange,
    );

    return () => {
      TOUCHSCREEN_MEDIA_QUERY.removeEventListener(
        "change",
        handleTouchscreenMediaQueryChange,
      );
    };
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (TOUCHSCREEN_MEDIA_QUERY.matches) {
        return;
      }

      const portraitClientRect = portraitRef.current?.getBoundingClientRect();

      if (portraitClientRect === undefined) {
        return;
      }

      const { clientX: mouseX, clientY: mouseY } = event;

      const calcX = -constrain(
        (mouseY - portraitClientRect.y - portraitClientRect.height / 2) /
          TILT_DIVISOR,
      );
      const calcY = constrain(
        (mouseX - portraitClientRect.x - portraitClientRect.width / 2) /
          TILT_DIVISOR,
      );

      const isHoveringOverPortrait =
        mouseX >= portraitClientRect.x &&
        mouseX < portraitClientRect.x + portraitClientRect.width &&
        mouseY >= portraitClientRect.y &&
        mouseY < portraitClientRect.y + portraitClientRect.height;

      setTransformStyles({
        rotateX: calcX,
        rotateY: calcY,
        scale: isHoveringOverPortrait ? HOVER_SCALE : 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Image
      className={className}
      draggable={false}
      ref={portraitRef}
      src={portraitSrc}
      style={{
        transform: `perspective(300px) rotateX(${transformStyles.rotateX}deg) rotateY(${transformStyles.rotateY}deg) scale(${transformStyles.scale})`,
      }}
    />
  );
};

export default Portrait;
