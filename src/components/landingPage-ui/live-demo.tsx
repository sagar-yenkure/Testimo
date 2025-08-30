"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import demoScreens from "./DemoTabs";

export function LiveDemo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our intuitive dashboard and see how easy it is to collect,
            manage, and display testimonials
          </p>
        </motion.div>

        <Tabs defaultValue="form">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8 h-full shadow-sm w-full">
            {demoScreens.map(({ id, title, icon: Icon }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="flex items-start justify-center gap-3 hover:cursor-pointer"
              >
                <Icon className="h-6 w-6 text-muted-foreground" />
                <span className="text-md font-medium text-black">{title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {demoScreens.map(({ id, content }) => (
            <TabsContent key={id} value={id}>
              <Card className=" bg-white shadow-2xl h-full">{content}</Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
