import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CardPopular from "@/components/CardPopular";
import tw from "twrnc";
import { useDeviceContext } from "twrnc";
import { PageScrollView } from "pagescrollview";
import CardRecent from "@/components/CardRecent";

const items = 20;

export default () => {
  return (
    <PageScrollView
      backgroundColor="#ebf3f3"
      style={styles.viewStyle}
      persistentScrollbar
    >
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
    </PageScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
  },
  itemView: {
    width: "100%",
    margin: 5,
    padding: 40,
  },
  itemText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
