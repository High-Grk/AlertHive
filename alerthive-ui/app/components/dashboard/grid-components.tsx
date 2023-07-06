'use client';

import { Grid } from "@tremor/react";

export default function GridComponent({children}: {children: React.ReactNode}) {
  return (
    <Grid numItems={1} numItemsMd={1} numItemsLg={3} className="gap-6 mt-6">
      {children}
    </Grid>
  );
}
