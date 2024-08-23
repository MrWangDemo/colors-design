<script setup lang="ts">
/*Call Components*/
import RevenueCard from '@/components/dashboard/RevenueCard.vue';
import NewCustomer from '@/components/dashboard/NewCustomer.vue';
import Totalincome from '@/components/dashboard/TotalIncome.vue';
import RevenueProduct from '@/components/dashboard/RevenueProducts.vue';
import DailyActivities from '@/components/dashboard/DailyActivities.vue';
import BlogCards from '@/components/dashboard/BlogCards.vue';
import { BlogCardData } from '@/data/Dashboard';
</script>

<template>
    <v-row>
       <!-- <v-col cols="12" lg="8"><RevenueCard /></v-col>
        <v-col cols="12" lg="4"
            ><NewCustomer class="mb-6" />
            <Totalincome />
        </v-col>
        <v-col cols="12" lg="8"><RevenueProduct/></v-col>
        <v-col cols="12" lg="4"><DailyActivities/> </v-col>-->
        <v-col cols="12">

<!--            <v-card>-->
<!--                <v-card-title>-->
<!--                    <h3>中国传统色彩-紫色</h3>-->
<!--                </v-card-title>-->
                <v-card-item>
                    <BlogCards :data="BlogCardData" title="中国传统色彩-紫色"/>
                </v-card-item>
<!--            </v-card>-->
        </v-col>
    </v-row>
</template>
