/*Revenue Projects*/
type RevenueProjects={
    img: string;
    leadname: string;
    designation: string;
    projectname: string;
    statuscolor: string;
    statustext: string;
    money: string;
};

// Daily Activities
type DailyActivities = {
    title: string;
    subtitle: string;
    textcolor: string;
    boldtext: boolean;
    line: boolean;
    link: string;
    url: string;
};

/*Card types*/
type BlogCards = {
    avatar: string;
    coveravatar: string;
    title: string;
    link: string;
    color: string;
};

export type{RevenueProjects,BlogCards}
