const userFields = `
    _id
    username
    email
    details {
    avatar
    fullName
    }   
`;

const commentFields = `
    _id
    title
    content
    createdDate
    createdUser {
        _id
        username
        email
        details {
        avatar
        fullName
        }
    }
    createdCustomer {
        _id
        firstName
        lastName
        avatar
    }
`;

const discussionFields = `
    _id
    title
    description
    createdBy
    createdDate
    modifiedBy
    modifiedDate
    content
    status
    startDate
    closeDate
    isComplete
    tagId   

    createdUser {
        ${userFields}
    }
    comments{
        ${commentFields}
    }
`;

const topicFields = `
    _id
    title
    description
    forumId

    createdBy
    createdDate
    modifiedBy
    modifiedDate

    discussions{
        ${discussionFields}
    }
`;

const forumFields = `
    _id
    title
    description
    languageCode

    createdBy
    createdDate
    modifiedBy
    modifiedDate

    topics{
        ${topicFields}
    }
    brand{
        _id
        name
    }
`;

const forums = `
    query forums{
        forums{
            ${forumFields}
        }
    }
`;

const forumDetail = `
    query forumDetail($_id: String!){
        forumDetail(_id: $_id){
            ${forumFields}
        }
    }
`;

const forumsTotalCount = `
    query forumsTotalCount{
        forumsTotalCount
    }
`;

const forumTopics = `
    query forumTopics($forumId: String!){
        forumTopics(forumId: $forumId){
            ${topicFields}
        }
    }
`;

const forumTopicDetail = `
    query forumTopicDetail($_id: String!){
        forumTopicDetail(_id: $_id){
           ${topicFields}
        }
    }
`;

const forumTopicsTotalCount = `
    query forumTopicsTotalCount($forumId: String){
        forumTopicsTotalCount(forumId: $forumId)
    }
`;

const forumTopicsGetLast = `
    query forumTopicsGetLast{
        forumTopicsGetLast{
            _id
        }
    }
`;

const forumDiscussions = `
    query forumDiscussions($page: Int $perPage: Int $topicId: String!){
        forumDiscussions(page: $page perPage: $perPage topicId: $topicId){
            ${discussionFields}
            
        }
    }
`;

const forumDiscussionDetail = `
    query forumDiscussionDetail($_id: String!){
        forumDiscussionDetail(_id: $_id){
            ${discussionFields}
        }
    }
`;

const forumDiscussionsTotalCount = `
    query forumDiscussionsTotalCount($topicId: String!){
        forumDiscussionsTotalCount(topicId: $topicId)
    }
`;

export default {
  forums,
  forumDetail,
  forumsTotalCount,
  forumTopics,
  forumTopicDetail,
  forumTopicsTotalCount,
  forumTopicsGetLast,
  forumDiscussions,
  forumDiscussionDetail,
  forumDiscussionsTotalCount
};
