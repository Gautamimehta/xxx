import React from "react";
import { Card } from "antd";
import StateChart from "./StateChart";
import CoursesChart from "./CoursesChart";

export default function LeftSection() {
  return (
    <div
      style={{
        width: window.innerWidth <= 500 ? "90%" : "50%",
        height: "90vh",
        minHeight: "90vh",
        margin: "auto"
      }}
    >
      <Card 
      style={{
        backgroundColor:"#D9DD6B"
      }}
      title="Grouping by States" className="chart-card" >
        <StateChart />
      </Card>
      <Card
       style={{
        backgroundColor:"#D9DD6B"
      }}
       title="Grouping by Courses" className="chart-card" >
        <CoursesChart />
      </Card>
    </div>
  );
}
