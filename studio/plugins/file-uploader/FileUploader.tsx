import React from "react";
import "./FileUploader.css";

import {
  Card,
  Box,
  Text,
  Label,
  TextInput,
  Stack,
} from "@sanity/ui";
import { withDocument } from "part:@sanity/form-builder";

const FileUploader = React.forwardRef((props,ref) => {
  const type : any = props;
  
  console.log(props);

// A function that returns JSX
return (
  <Card>
    <Box paddingY={3}>
      <Stack space={2}>
        <Text weight={"semibold"} size={1}>
          {type.title ? type.title : "File Uploader"}
        </Text>
        <Text size={1}>
          {type.description
            ? type.description
            : "Upload files to object storage"}
        </Text>
      </Stack>
    </Box>
    <Box padding={[3, 3, 4, 5]} style={{ border: "1px solid #bfc1c7" }}>
      Hi, This is custom component!
    </Box>
  </Card>
);
});

// Create the default export to import into our schema
export default withDocument(FileUploader);
