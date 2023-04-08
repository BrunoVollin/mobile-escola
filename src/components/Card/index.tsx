import { Text } from "react-native";
import { Wrapper } from "./styles";
import { Button, Card as PaperCard } from "react-native-paper";
import { ReactFragment, ReactNode } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  content?: string | ReactFragment;
  cover?: string;
  actions?: ReactNode
}

export default function Card({
  title,
  subtitle,
  content,
  cover,
  actions,
}: CardProps) {
  return (
    <PaperCard
      style={{
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <PaperCard.Title title={title} subtitle={subtitle} />
      <PaperCard.Content>
        {typeof content === "string" ? <Text>{content}</Text> : content}
      </PaperCard.Content>
      <PaperCard.Actions>{actions}</PaperCard.Actions>
    </PaperCard>
  );
}
