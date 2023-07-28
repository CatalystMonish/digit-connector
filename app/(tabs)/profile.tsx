import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import ProfileImage from "../../components/ProfileImage";
import ApplicationItem from "../../components/ApplicationItem";

interface ApplicationData {
  id: number;
  companyName: string;
  applicationStatus: string;
  companyLogoUrl: string;
}

const ProfileScreen: React.FC = () => {
  const profileImageUrl = "https://unsplash.it/200/200?random=21"; // Replace with your profile image URL
  const username = "John Doe";
  const dateRegistered = "Joined: July 2023";

  const applicationsData: ApplicationData[] = [
    {
      id: 1,
      companyName: "Google",
      applicationStatus: "In Progress",
      companyLogoUrl: "https://unsplash.it/200/200?random=22",
    },
    {
      id: 2,
      companyName: "Microsoft",
      applicationStatus: "Accepted",
      companyLogoUrl: "https://unsplash.it/200/200?random=23",
    },
    // Add more application data here
  ];

  return (
    <View style={styles.container}>
      <ProfileImage imageUrl={profileImageUrl} />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.dateRegistered}>{dateRegistered}</Text>
      <Text style={styles.applicationsTitle}>Applications:</Text>
      <FlatList
        data={applicationsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ApplicationItem
            companyName={item.companyName}
            applicationStatus={item.applicationStatus}
            companyLogoUrl={item.companyLogoUrl}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  dateRegistered: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
  },
  applicationsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default ProfileScreen;
