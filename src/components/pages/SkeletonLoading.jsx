import React from "react";
import Skeleton from "@mui/material/Skeleton";
import style from "../css/SkeletonLoading.css";
import { Box } from "@mui/material";

const SkeletonLoading = () => {
  return (
    <div
      className={style.ske}
      style={{
        width: "70%",
        height: "100%",
        maxHeight: "500px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          style={{ width: "100%", height: "100%", marginLeft: "20%" }}
        />
        <br />
        <Skeleton
          animation="wave"
          style={{ width: "100%", height: "35px", marginLeft: "20px" }}
        />
        <Skeleton
          animation="wave"
          style={{ width: "100%", height: "45px", marginLeft: "20px" }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          style={{ width: "100%", height: "250px", marginLeft: "20%" }}
        />
      </Box>
    </div>
  );
};

export default SkeletonLoading;
