import { StatusBar } from "expo-status-bar";
import { View } from "@/components/Themed";
import { StyleSheet, ScrollView, Pressable, FlatList, Image } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import tw from "twrnc";
import { useDeviceContext } from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tab, TabBar, Input, Text } from "@ui-kitten/components";
import React from "react";
import CardPopular from "@/components/CardPopular";
import { FontAwesome } from "@expo/vector-icons";
import CardRecent from "@/components/CardRecent";
import { PageScrollView } from "pagescrollview";
import { Link } from "expo-router";

export default function TabOneScreen() {
  useDeviceContext(tw);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <PageScrollView backgroundColor="#ebf3f3" persistentScrollbar>
      <View style={tw` flex justify-center`}>
        <SafeAreaView style={tw`md:max-w-[1000px]`}>
          <View>
            {/* 
    <Input placeholder='search for jobs, companies and more' style={tw`mx-2 mb-5 mt-10`}/> */}
            <View style={tw`flex-1 flex-row items-center mx-2 mb-5 mt-2 web:mt-5`}>
            <Image
            source={{
              uri: "https://unsplash.it/200/200?random=9"
            }}
            style={tw`w-12 h-12 rounded-xl`}
          />
              <Pressable style={tw`flex-1`}>
                <View style={tw`rounded-xl  bg-[#f3f3f3] ml-1`}>
                  <Link href="/search" style={tw`text-sm ml-2 p-4  text-[#a1a1a1]`}>
                    Search for Jobs, Companies and More
                  </Link>
                </View>
              </Pressable>
            </View>

            <Text style={tw`text-xl font-semibold ml-5 mb-5`}>
              Popular Jobs
            </Text>

            <ScrollView
              style={tw`ml-5`}
              horizontal
              showsHorizontalScrollIndicator={true}
            >
              <CardPopular
                imageUrl="https://unsplash.it/200/200?random=1"
                title="Amazon"
                jobTitle="Software Engineer"
                tags={["JavaScript", "Node.js", "AWS"]}
                location="Seattle, Washington"
                salary="$3000-$5000"
              />

              <CardPopular
                imageUrl="https://unsplash.it/200/200?random=2"
                title="Microsoft"
                jobTitle="Frontend Developer"
                tags={["React", "TypeScript", "Redux"]}
                location="Redmond, Washington"
                salary="$2800-$4500"
              />

              <CardPopular
                imageUrl="https://unsplash.it/200/200?random=3"
                title="Apple"
                jobTitle="iOS Developer"
                tags={["Swift", "Objective-C", "iOS SDK"]}
                location="Cupertino, California"
                salary="$3200-$5500"
              />

              <CardPopular
                imageUrl="https://unsplash.it/200/200?random=4"
                title="Facebook"
                jobTitle="Data Scientist"
                tags={["Python", "Machine Learning", "Data Analysis"]}
                location="Menlo Park, California"
                salary="$3500-$6000"
              />

              <CardPopular
                imageUrl="https://unsplash.it/200/200?random=5"
                title="Netflix"
                jobTitle="UI/UX Designer"
                tags={["Adobe XD", "Figma", "User Research"]}
                location="Los Gatos, California"
                salary="$2800-$5000"
              />
            </ScrollView>

            <Text style={tw`text-xl font-semibold ml-5 mb-5 mt-5`}>
              Recent Jobs
            </Text>
            <View style={tw`mx-5`}>
              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=1"
                jobTitle="Lead Software Developer"
                location="Mumbai, Maharashtra"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=1"
                jobTitle="Frontend Developer"
                location="Seattle, Washington"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=2"
                jobTitle="iOS Developer"
                location="Cupertino, California"
              />
              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=3"
                jobTitle="Data Scientist"
                location="New York, NY"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=4"
                jobTitle="Backend Developer"
                location="San Francisco, CA"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=5"
                jobTitle="UX Designer"
                location="Austin, TX"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=6"
                jobTitle="Product Manager"
                location="Chicago, IL"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=7"
                jobTitle="Full Stack Developer"
                location="Toronto, Canada"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=8"
                jobTitle="Graphic Designer"
                location="London, UK"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=9"
                jobTitle="DevOps Engineer"
                location="Berlin, Germany"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=10"
                jobTitle="Data Analyst"
                location="Tokyo, Japan"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=11"
                jobTitle="Software Architect"
                location="Sydney, Australia"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=12"
                jobTitle="Android Developer"
                location="Seoul, South Korea"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=13"
                jobTitle="Frontend Engineer"
                location="Bangalore, India"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=14"
                jobTitle="UI Designer"
                location="Amsterdam, Netherlands"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=15"
                jobTitle="Mobile App Developer"
                location="Dubai, UAE"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=16"
                jobTitle="Project Manager"
                location="Stockholm, Sweden"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=17"
                jobTitle="Blockchain Developer"
                location="Zurich, Switzerland"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=18"
                jobTitle="Ruby on Rails Developer"
                location="São Paulo, Brazil"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=19"
                jobTitle="AI Researcher"
                location="Moscow, Russia"
              />

              <CardRecent
                imageUrl="https://unsplash.it/200/200?random=20"
                jobTitle="Systems Administrator"
                location="Mexico City, Mexico"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </PageScrollView>
  );
}
