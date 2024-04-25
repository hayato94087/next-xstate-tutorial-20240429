"use client";
import { useMachine } from "@xstate/react";
import { toggleMachine } from "@/machines/toggle-machine";

export const ToggleState = () => {
  const [state, send] = useMachine(toggleMachine);
  return (
    <>
      <div>{JSON.stringify(state.value)}</div>
      <button
        onClick={() => send({ type: "toggle" })}
        className="bg-blue-200 rounded-md py-1 px-3 text-slate-800 text-base"
      >
        Toggle
      </button>
    </>
  );
};
