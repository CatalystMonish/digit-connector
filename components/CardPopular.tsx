import { View, Image, ScrollView } from "react-native";
import React from "react";
import { Card, Text } from "@ui-kitten/components";
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';

interface CardPopularProps {
  imageUrl: string;
  title: string;
  jobTitle: string;
  tags: string[];
  location: string;
  salary: string;
}

const CardPopular: React.FC<CardPopularProps> = ({ imageUrl, title, jobTitle, tags, location, salary }) => {
  useDeviceContext(tw);
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View>
      <View style={tw`mx-2 w-[350px] rounded-xl border-solid border-2 p-5 border-slate-200 `}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={tw`w-10 h-10 rounded-xl p-2`}
        />
        <Text style={tw`mt-2`}>
          {title}
        </Text>
        <Text style={tw`text-xl`}>
          {jobTitle}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator= {false} >
          {tags.map((tag, index) => (
            <View style={tw` ios:bg-slate-200 rounded-xl mx-1 my-1`}>
            <Text key={index} style={tw`android:bg-slate-200 web:bg-slate-200 p-1 px-4 rounded-xl`}>
              {tag}
            </Text>
            </View>
          ))}
        </ScrollView>
        <Text style={tw`text-sm mt-2`}>
          {location}
        </Text>
        <Text style={tw`text-xl mt-2 text-right font-semibold`}>
          {salary}
        </Text>
      </View>
    </View>
  );
};

export default CardPopular;
