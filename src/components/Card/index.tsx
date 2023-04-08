import { Text } from "react-native";
import { ColumnContain, RowContain, Subtitle, Wrapper } from "./styles";
import { Button, Card as PaperCard } from "react-native-paper";
import { ReactFragment, ReactNode } from "react";
import { Image } from "react-native";

interface CardProps {
  title: string;
  subtitle: string;
  content?: string | ReactFragment;
  cover?: string;
  actions?: ReactNode;
  image?: string;
  onPress?: () => void;
}

export default function Card({
  title,
  subtitle,
  content,
  cover,
  actions,
  image,
  onPress,
}: CardProps) {
  return (
    <PaperCard
      style={{
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
      }}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <PaperCard.Content>
        <RowContain>
          <Image
            source={{
              uri: image || "https://picsum.photos/200/100",
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 0.2,
              borderColor: "#b8b8b8",
            }}
          />
          <ColumnContain>
            <PaperCard.Title title={title} />
          </ColumnContain>
        </RowContain>

        {typeof content === "string" ? <Text>{content}</Text> : content}
      </PaperCard.Content>
      <PaperCard.Actions>{actions}</PaperCard.Actions>
    </PaperCard>
  );
}
