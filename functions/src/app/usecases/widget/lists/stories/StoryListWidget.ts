import Widget from "../../../../common/widget/Widget";
import { StoryProps } from "../../components/story/StoryWidget";

interface StoryListProps {
  stories: StoryProps[];
  hoverable?: boolean;
}

const StoryListWidget = (props?: StoryListProps) =>
  Widget.builder<StoryListProps>("story-list").setData(props);

export default StoryListWidget;
