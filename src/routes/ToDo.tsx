import { Box, Container, Grid, Typography } from "@mui/material"
import { Card } from "../components/Card/Card"

interface ITask {
  id: number,
  name: string,
}

const task = [
  {
    id: 23123,
    name: 'afaff',
  },
  {
    id: 23123,
    name: 'afaff',
  },
  {
    id: 23123,
    name: 'afaff',
  },
  {
    id: 23123,
    name: 'afaff',
  },
  {
    id: 23123,
    name: 'afaff',
  },
]

export const ToDo = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Card />
      </Grid>
      <Grid xs={4}>
        <Card />
      </Grid>
      <Grid xs={4}>
        <Card />
      </Grid>
      <Grid xs={8}>
        <Card />
      </Grid>
    </Grid>
  )
}
