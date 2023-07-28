import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface ApplicationItemProps {
  companyName: string;
  applicationStatus: string;
  companyLogoUrl: string;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({
  companyName,
  applicationStatus,
  companyLogoUrl,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: companyLogoUrl }} style={styles.logo} />
      <View style={styles.details}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.applicationStatus}>{applicationStatus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  applicationStatus: {
    fontSize: 16,
    color: "gray",
  },
});

export default ApplicationItem;
