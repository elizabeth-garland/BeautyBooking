using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Models.DTOs
{
    public class TalentBusiness
    {
        [Key]
        [Required]
        public string BusinessId { get; set; } = "";

        [Required]
        public string BusinessName { get; set; } = "";

        [Required]
        public string Location { get; set; } = "";

        public string Bio { get; set; } = "";

        public string ContactNumber { get; set; } = "";

        [ForeignKey("TalentUser")]
        public string UserId { get; set; } = "";

        public TalentUser TalentUser { get; set; } = new TalentUser();

    }
}