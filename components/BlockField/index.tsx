import React from "react";
import {
  Collapse,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

type blockStyles = "dots" | "square" | "round";

interface BlockFieldProps {
  updateBlockStyle: (value: blockStyles) => void;
  updateBlockSize: (value: number) => void;
}

const BlockField = ({ updateBlockStyle, updateBlockSize }: BlockFieldProps) => {
  const [currentStyle, setCurrentStyle] = useState<blockStyles>("square");

  const handleStyleChange = (nextValue: string) => {
    setCurrentStyle(nextValue as blockStyles);
    updateBlockStyle(nextValue as blockStyles);
  };

  return (
    <>
      <FormControl>
        <FormLabel>What style of blocks you want?</FormLabel>
        <RadioGroup
          as={HStack}
          value={currentStyle}
          onChange={handleStyleChange}
          spacing={6}
        >
          <Radio value="square">square</Radio>
          <Radio value="dots">dots</Radio>
          <Radio value="round">round</Radio>
        </RadioGroup>
      </FormControl>
      <Collapse
        in={currentStyle === "round"}
        style={{ padding: 6, overflow: "visible" }}
      >
        <FormControl>
          <FormLabel>Set the block size</FormLabel>
          <Slider
            min={10}
            max={99}
            defaultValue={30}
            onChange={(value) => updateBlockSize(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>
      </Collapse>
    </>
  );
};

export default BlockField;
