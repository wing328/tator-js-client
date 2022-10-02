# Tator.EmailSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipients** | **[String]** | Recipients of the email message. They must be members of this project. Entries are either in \&quot;Name &lt;email@email.com&gt;\&quot; or \&quot;email@email.com\&quot; format | 
**subject** | **String** | Subject of the email message | 
**text** | **String** | Text body of the email message. HTML is currently not supported. | 
**attachments** | [**[EmailAttachmentSpec]**](EmailAttachmentSpec.md) | S3 object(s) to send as attachment(s). Ensure the attachment size does not exceed the corresponding email service limits | [optional] 


