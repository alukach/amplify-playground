import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { MouseEventHandler } from "react";

type Props = { signOut?: MouseEventHandler }

function App(props: Props | undefined) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>

      {props?.signOut && <Button onClick={props.signOut}>Sign Out</Button>}
    </View>
  );
}

export default withAuthenticator<Props>(App);