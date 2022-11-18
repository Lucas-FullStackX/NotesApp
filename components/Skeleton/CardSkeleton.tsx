import { Skeleton, Stack } from '@mui/material';

export default function CardSkeleton() {
  return (
    <Stack m={2} spacing={1}>
      <Skeleton variant="rounded" height={120} />
      <Skeleton variant="rounded" height={120} />
      <Skeleton variant="rounded" height={120} />
      <Skeleton variant="rounded" height={120} />
    </Stack>
  );
}
