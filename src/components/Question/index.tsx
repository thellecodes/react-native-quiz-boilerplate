import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { QuestionRoutes } from "../Navigation";

import Question from "./Question";

export const assets = [];

const OnBoardingStack = createStackNavigator<QuestionRoutes>();
export const OnBoardingNavigator = () => (
  <OnBoardingStack.Navigator headerMode="none" initialRouteName="Question">
    <OnBoardingStack.Screen name="Question" component={Question} />
  </OnBoardingStack.Navigator>
);
