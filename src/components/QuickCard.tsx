import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useChat } from "../context/ChatContext";

interface Props {
  text: string;
}

const QuickCard: React.FC<Props> = ({ text }) => {
  const { sendMessage } = useChat();

  return (
    <Card sx={{ minWidth: 200, mr: 2, borderRadius: 3 }}>
      <CardActionArea onClick={() => sendMessage(text)}>
        <CardContent>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuickCard;
