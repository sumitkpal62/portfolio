"use client";

const COLS = 14;
const ROWS = 10;
const TOTAL = COLS * ROWS;

export default function HoverGrid() {
    return (
        <div className="fixed inset-0 z-0">
            <div
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                    gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                }}
            >
                {Array.from({ length: TOTAL }).map((_, i) => (
                    <div
                        key={i}
                        className="
              bg-gray-950
              border border-gray-800
              transition-colors duration-200
              hover:bg-purple-600/60
            "
                    />
                ))}
            </div>
        </div>
    );
}
