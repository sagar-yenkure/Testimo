"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { profileFields } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Camera, Edit, Save } from "lucide-react";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic
  };
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details and profile info
            </CardDescription>
          </div>
          <Button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className={
              isEditing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Avatar Section */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" />
              <AvatarFallback className="text-xl">JD</AvatarFallback>
            </Avatar>
            {isEditing && (
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
              >
                <Camera className="w-4 h-4" />
              </Button>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {profileData.firstName} {profileData.lastName}
            </h3>
            <p className="text-gray-600">{profileData.email}</p>
            <p className="text-sm text-gray-500">Member since Jan 2024</p>
          </div>
        </div>

        <Separator />

        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileFields.map((fields) => {
            const { id, label, icon: Icon } = fields;
            return (
              <div key={id} className="space-y-2">
                <Label htmlFor={id}>{label}</Label>
                <div className="relative">
                  {Icon && (
                    <Icon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  )}
                  <Input
                    id={id}
                    value={profileData[id as keyof typeof profileData]}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        [id]: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                    className={`${Icon ? "pl-10" : ""} ${
                      !isEditing ? "bg-gray-50" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
