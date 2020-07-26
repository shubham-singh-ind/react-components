import React, { lazy, Suspense } from "react";
import "./styles.css";
import SyncLoader from "react-spinners/SyncLoader";

const SocialCard = lazy(() => import("./components/SocialCard"));

export default function App() {
  return (
    <div className="App">
      <h3 style={{ borderBottom: "1px solid gray", lineHeight: "30px" }}>
        Social Card Styling using CSS Flexbox
      </h3>
      <br />
      <Suspense
        fallback={
          <div className="loader">
            <SyncLoader size={15} color={"#60DAFA"} />
          </div>
        }
      >
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
        <SocialCard
          profileUrl="https://randomuser.me/api/portraits/men/84.jpg"
          name="The Practical Dev"
          description="Learning React? Start Small."
          postedDate="Sep 10"
          postUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wf1WPFWS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png"
          postDescription="Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps."
          noOflikes={90}
          noOfcomments={2}
          noOfShares={47}
        />
      </Suspense>
    </div>
  );
}
