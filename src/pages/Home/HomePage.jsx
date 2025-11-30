import { LandingPage } from "@/components/LandingPage/LandingPage.jsx";
import { LatestNews } from "@/components/LatestNews/LatestNews.jsx";
import { RecentComics } from "@/components/RecentComics/RecentComics.jsx";
import { PopularWithFriends } from "@/components/PopularWithFriends/PopularWithFriends.jsx";

export const HomePage = () => {
  return (
    <>
      <LandingPage />
      <LatestNews />
      <RecentComics />
      <PopularWithFriends />
    </>
  );
};
export default HomePage;