import React from "react";

import ContentLayout from "../components/Layout/ContentLayout";

const DUMMY_DATA = [
  {
    id: 1,
    title: "ახალი ეპიზოდები",
    img:
      "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1618123/Latvian/1618123_Latvian_ShowKeyart_efd2049b-f1e3-ea11-82a8-dd291e252010.jpg",
  },
  {
    id: 2,
    title: "ჩვენი გახმოვანებული ფილმები",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/028edc52-0321-4e07-aa99-f61cd19fbcb4/dunhku-ca817fe8-98e4-4204-b811-224703c835fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOGVkYzUyLTAzMjEtNGUwNy1hYTk5LWY2MWNkMTlmYmNiNFwvZHVuaGt1LWNhODE3ZmU4LTk4ZTQtNDIwNC1iODExLTIyNDcwM2M4MzVmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZBBb0zoVCNQhU1DkWN_Jjpl4WU1Lg0Ztq4tQqYPkKKo",
  },
  {
    id: 3,
    title: "ახალი დამატებული ფილმები",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/028edc52-0321-4e07-aa99-f61cd19fbcb4/dunhku-ca817fe8-98e4-4204-b811-224703c835fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOGVkYzUyLTAzMjEtNGUwNy1hYTk5LWY2MWNkMTlmYmNiNFwvZHVuaGt1LWNhODE3ZmU4LTk4ZTQtNDIwNC1iODExLTIyNDcwM2M4MzVmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZBBb0zoVCNQhU1DkWN_Jjpl4WU1Lg0Ztq4tQqYPkKKo",
  },
  {
    id: 4,
    title: "თურქული სერიალები",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/028edc52-0321-4e07-aa99-f61cd19fbcb4/dunhku-ca817fe8-98e4-4204-b811-224703c835fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOGVkYzUyLTAzMjEtNGUwNy1hYTk5LWY2MWNkMTlmYmNiNFwvZHVuaGt1LWNhODE3ZmU4LTk4ZTQtNDIwNC1iODExLTIyNDcwM2M4MzVmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZBBb0zoVCNQhU1DkWN_Jjpl4WU1Lg0Ztq4tQqYPkKKo",
  },
  {
    id: 5,
    title: "სერიალები",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/028edc52-0321-4e07-aa99-f61cd19fbcb4/dunhku-ca817fe8-98e4-4204-b811-224703c835fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOGVkYzUyLTAzMjEtNGUwNy1hYTk5LWY2MWNkMTlmYmNiNFwvZHVuaGt1LWNhODE3ZmU4LTk4ZTQtNDIwNC1iODExLTIyNDcwM2M4MzVmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZBBb0zoVCNQhU1DkWN_Jjpl4WU1Lg0Ztq4tQqYPkKKo",
  },
  {
    id: 6,
    title: "მულტფილმები",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/028edc52-0321-4e07-aa99-f61cd19fbcb4/dunhku-ca817fe8-98e4-4204-b811-224703c835fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOGVkYzUyLTAzMjEtNGUwNy1hYTk5LWY2MWNkMTlmYmNiNFwvZHVuaGt1LWNhODE3ZmU4LTk4ZTQtNDIwNC1iODExLTIyNDcwM2M4MzVmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZBBb0zoVCNQhU1DkWN_Jjpl4WU1Lg0Ztq4tQqYPkKKo",
  },
];

const HomePage = () => {
  return <ContentLayout dummyData={DUMMY_DATA} />;
};

export default HomePage;
