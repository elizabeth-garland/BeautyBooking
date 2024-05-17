using System.ComponentModel.DataAnnotations;

namespace Models.DTOs
{
    public class TalentUser
    {
        [Key]
        [Required]
        public string UserId { get; set; } = "";

        public string Name { get; set; } = "";

        [Required]
        public string Email { get; set; } = "";

        public string Location { get; set; } = "";

        public string Bio { get; set; } = "";

        public string ContactNumber { get; set; } = "";

    }
}