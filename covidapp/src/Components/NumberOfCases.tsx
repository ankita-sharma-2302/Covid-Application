import React from "react";
import { Typography, CardContent, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";

interface Props {
  title: string;
}
export const NumberOfCases: React.FC<Props> = props => {
  return (
    <div className="card">
      <div className="Covid">
        <Grid
          container
          spacing={3}
          justify="center"
          xs={12}
          className="container">
          <Grid item component={Card}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                {props.title}
              </Typography>
              <Typography variant="h5">{props.children}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
      <br></br>
    </div>
  );
};
