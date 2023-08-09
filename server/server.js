const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database using Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/engima-sphere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import and use the route handlers for each component
const advancedSearchIndexRoutes = require("./routes/AdvancedSearchIndex");
app.use("/models/advanced-search-index", advancedSearchIndexRoutes);

const followerRoutes = require("./routes/Follower");
app.use("/models/follower", followerRoutes);

const notificationRoutes = require("./routes/Notification");
app.use("/models/notification", notificationRoutes);


const postVisibilityRoutes = require("./routes/PostVisibility");
app.use("/models/post-visibility", postVisibilityRoutes);


const topicRoutes = require("./routes/Topic");
app.use("/models/topic", topicRoutes);


const checkinRoutes = require("./routes/Checkin");
app.use("/models/checkin", checkinRoutes);

const hashtagRoutes = require("./routes/Hashtag");
app.use("/models/hashtag", hashtagRoutes);

const pollRoutes = require("./routes/Poll");
app.use("/models/poll", pollRoutes);

const profileRoutes = require("./routes/Profile");
app.use("/models/profile", profileRoutes);

const trendingPostRoutes = require("./routes/TrendingPost");
app.use("/models/trending-post", trendingPostRoutes);


const commentRoutes = require("./routes/Comment");
app.use("/models/comment", commentRoutes);

const likeRoutes = require("./routes/Like");
app.use("/models/like", likeRoutes);

const postAnalyticsRoutes = require("./routes/PostAnalytics");
app.use("/models/post-analytics", postAnalyticsRoutes);

const reportRoutes = require("./routes/Report");
app.use("/models/report", reportRoutes);

const userAnalyticsRoutes = require("./routes/UserAnalytics");
app.use("/models/user-analytics", userAnalyticsRoutes);

const eventRoutes = require("./routes/Event");
app.use("/models/event", eventRoutes);

const messageRoutes = require("./routes/Message");
app.use("/models/message", messageRoutes);

const postRoutes = require("./routes/Post");
app.use("/models/post", postRoutes);

const searchIndexRoutes = require("./routes/SearchIndex");
app.use("/models/search-index", searchIndexRoutes);

const userRoutes = require("./routes/User");
app.use("/models/user", userRoutes);

const exploreContentRoutes = require("./routes/ExploreContent");
app.use("/models/explore-content", exploreContentRoutes);

const moderationQueueRoutes = require("./routes/ModerationQueue");
app.use("/models/moderation-queue", moderationQueueRoutes);

const postMediaRoutes = require("./routes/PostMedia");
app.use("/models/post-media", postMediaRoutes);

const shareRoutes = require("./routes/Share");
app.use("/models/share", shareRoutes);

const userSettingsRoutes = require("./routes/UserSettings");
app.use("/models/user-settings", userSettingsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
