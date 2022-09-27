import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import BlockField from "components/BlockField";
import FormatField from "components/FormatField";
import SizeField from "components/SizeField";
import URLField from "components/URLfield";
import { fieldData } from "pages";
import React from "react";
import { QR_FORM_FIELD, QRFormData } from "../../consts/QRForm";

const QRForm = ({
  updateForm,
}: {
  updateForm: (field: fieldData["field"], value: fieldData["value"]) => void;
}) => {
  return (
    <Stack
      data-testid="innerContainer-left"
      w={{ md: "30%" }}
      px="6"
      py="10"
      bgColor="bg.main"
      align="center"
    >
      <Heading>Create your custom QR</Heading>
      <Stack px="12" py="8" w="full" h="full" spacing={6}>
        <URLField
          updateUrl={(value: string) => updateForm(QR_FORM_FIELD.URL, value)}
        />
        <SizeField
          updateSize={(value: number) => updateForm(QR_FORM_FIELD.SIZE, value)}
        />
        <FormatField
          updateFormat={(value: QRFormData[QR_FORM_FIELD.FORMAT]) =>
            updateForm(QR_FORM_FIELD.FORMAT, value)
          }
        />
        <BlockField
          updateBlockSize={(value: number) =>
            updateForm(QR_FORM_FIELD.BLOCK_SIZE, value)
          }
          updateBlockStyle={(value: QRFormData[QR_FORM_FIELD.BLOCK_STYLE]) =>
            updateForm(QR_FORM_FIELD.BLOCK_STYLE, value)
          }
        />
      </Stack>
      <Button>Generate your QR!</Button>
    </Stack>
  );
};

export default QRForm;
