import { useEffect, useState } from "react";

type InteractionEvent =
  | "mousedown"
  | "keydown"
  | "touchstart"
  | "pointerdown"

/**
 * Hook to detect the user's first trusted interaction.
 * Browser-safe for things like autoplay or permission APIs.
 */
export function useUserFirstInteraction() {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;

    const handleFirstInteraction = (e: Event) => {
      // Only count genuine (trusted) user interactions
      if (e.isTrusted) {
        setHasInteracted(true);

        // Cleanup all listeners once first interaction is detected
        eventTypes.forEach((eventType) =>
          window.removeEventListener(eventType, handleFirstInteraction)
        );
      }
    };

    const eventTypes: InteractionEvent[] = [
      "mousedown",
      "keydown",
      "touchstart",
      "pointerdown",
    ];

    eventTypes.forEach((eventType) =>
      window.addEventListener(eventType, handleFirstInteraction, {
        passive: true,
        once: true,
      })
    );

    return () => {
      eventTypes.forEach((eventType) =>
        window.removeEventListener(eventType, handleFirstInteraction)
      );
    };
  }, [hasInteracted]);

  return hasInteracted;
}
