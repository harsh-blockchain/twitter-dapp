// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TwitterContract {
    struct Tweet {
        uint256 id;
        address username;
        string tweetText;
        bool isDeleted;
    }

    Tweet[] public tweets;

    mapping(uint256 => address) tweetToOwner;

    function addTweet(string memory tweetText, bool isDeleted) external {
        uint256 tweetId = tweets.length;
        tweets.push(Tweet(tweetId, msg.sender, tweetText, isDeleted));
        tweetToOwner[tweetId] = msg.sender;
        emit AddTweet(msg.sender, tweetId);
    }

    event AddTweet(address recipient, uint256 tweetId);

    function deleteTweet(uint256 tweetId, bool isDeleted) external {
        if (tweetToOwner[tweetId] == msg.sender) {
            tweets[tweetId].isDeleted = isDeleted;
            emit DeleteTweet(tweetId, isDeleted);
        }
    }

    event DeleteTweet(uint256 tweetId, bool isDeleted);

    function getMyTweets() external view returns (Tweet[] memory) {
        Tweet[] memory temporary = new Tweet[](tweets.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < tweets.length; i++) {
            if (tweetToOwner[i] == msg.sender && tweets[i].isDeleted == false) {
                temporary[counter] = tweets[i];
                counter++;
            }
        }

        Tweet[] memory result = new Tweet[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function getAllTweets() external view returns (Tweet[] memory) {
        Tweet[] memory temporary = new Tweet[](tweets.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < tweets.length; i++) {
            if (tweets[i].isDeleted == false) {
                temporary[counter] = tweets[i];
                counter++;
            }
        }

        Tweet[] memory result = new Tweet[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }
}
