import React, { useState } from "react";
import { Card, CardContent } from "@shadcn/ui";  // For card styling

const Leaderboard = () => {
  const [scores, setScores] = useState([
    { team: "Team Alpha", points: 120 },
    { team: "Squad Kings", points: 95 },
    { team: "Victory Warriors", points: 80 },
    { team: "The Champions", points: 60 },
    { team: "Clutch Masters", points: 45 },
  ]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold">Leaderboard</h2>
      <div className="mt-4">
        {scores.map((team, index) => (
          <Card key={index} className="p-2 mb-2">
            <CardContent>
              <p className="text-lg font-bold">
                {team.team} - {team.points} Points
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
