import { WordCard } from "@/components/WordCard";
import { Typography } from "@/components/utils";
import { theme } from "@/utils";

export const TodayWords = () => {
  return (
    <div>
      <Typography variant="h4" color={theme.palette.grey[200]}>
        Today
      </Typography>
      <WordCard></WordCard>
    </div>
  );
};
