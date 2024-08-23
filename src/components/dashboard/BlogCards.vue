<script setup lang="ts">


const props = defineProps(['data','title'])

</script>
<template>
    <v-row>
        <v-col cols="12">
            <h5 class="text-h3 my-3 custom-text-primary">{{title}}}</h5>
        </v-col>
        <v-col cols="12" lg="4" v-for="card in data" :key="card.title">
            <v-card elevation="5"  rounded="md" class="card-hover">
                <div>
                    <v-card-item :style="{backgroundColor:card.color}" height="250px" cover class="rounded-t-md align-end text-right">

<!--                        <v-card-item-->
<!--                            ><v-chip class="bg-surface text-body-2 font-weight-medium" size="small" rounded="sm" v-text="card.read"></v-chip-->
<!--                        ></v-card-item>-->
                    </v-card-item>
<!--                    <v-avatar size="40" class="mt-n7 mx-6">-->
<!--                        <img :src="card.avatar" alt="icon" height="40" />-->
<!--                    </v-avatar>-->
                    <v-card-item :style="{backgroundColor:card.color}" class="pt-4">
<!--                        <v-chip class="text-body-2 font-weight-medium bg-grey100" size="small" rounded="sm" v-text="card.category"></v-chip>-->
                        <h5 class="text-h5 text-13 my-3 custom-text-primary">
                            <RouterLink class="text-decoration-none color-inherits custom-title" :to="card.link">{{ card.title }}</RouterLink>
                        </h5>
<!--                        <div class="d-flex align-center justify-space-between">-->
<!--                            <div>-->
<!--&lt;!&ndash;                                <v-avatar class="" size="18">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <EyeIcon size="18" class="text-textPrimary" />&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-avatar>&ndash;&gt;-->
<!--                                <span class="text-subtitle-1 ml-2 text-textSecondary" v-text="card.view"></span>-->
<!--&lt;!&ndash;                                <v-avatar class="ml-4" size="18">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <Message2Icon size="18"  class="text-textPrimary" />&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;                                <span class="text-subtitle-1 ml-2 text-textSecondary" v-text="card.comments"></span>&ndash;&gt;-->
<!--                            </div>-->
<!--&lt;!&ndash;                            <div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <v-avatar size="10">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <CircleIcon size="10" class="text-textPrimary" />&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;                                <span class="text-subtitle-2 ml-2 text-textSecondary" v-text="card.time"></span>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        </div>-->
                    </v-card-item>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
