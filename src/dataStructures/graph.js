export function knightMoves(start, end) {
    if (!isValidPosition(start) || !isValidPosition(end)) {
        throw new Error("Invalid board position.");
    }

    const queue = [
        {
            position: start,
            path: [start],
        },
    ];

    let front = 0;

    while (front < queue.length) {
        const { position, path } = queue[front++];

        if (position[0] === end[0] && position[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

            path.forEach((square) => console.log(square));

            return path;
        }

        for (const move of getMoves(position)) {
            const key = move.join(",");

            if (!visited.has(key)) {
                visited.add(key);

                queue.push({
                    position: move,
                    path: [...path, move],
                });
            }
        }
    }
}

function getMoves([x, y]) {
    const offsets = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    const moves = [];

    for (const [dx, dy] of offsets) {
        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            moves.push([newX, newY]);
        }
    }

    return moves;
}

function isValidPosition([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}
