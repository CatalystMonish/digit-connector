import { View, Image } from "react-native";
import React from "react";
import { Card, Text } from "@ui-kitten/components";
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';

interface CardRecentProps {
  imageUrl: string;
  jobTitle: string;
  location: string;
}

const CardRecent: React.FC<CardRecentProps> = ({ imageUrl, jobTitle, location }) => {
  useDeviceContext(tw);

  return (
    <View>
      <Card style={tw`rounded-xl my-1`}>
        <View style={tw`flex flex-row items-center`}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={tw`w-12 h-12 rounded-xl p-2`}
          />
          <View style={tw`flex ml-2`}>
            <Text style={tw`text-xl `}>
              {jobTitle}
            </Text>
            <Text style={tw`text-sm`}>
              {location}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default CardRecent;
