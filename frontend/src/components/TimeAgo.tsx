import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function TimeAgo({ date }: { date: Date }) {
  return <span>{dayjs(date).fromNow()}</span>;
}
