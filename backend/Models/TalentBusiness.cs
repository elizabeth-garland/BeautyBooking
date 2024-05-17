using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BeautyBooking.Models
{
    public class TalentBusiness
    {
        [Key]
        [Required]
        public Guid BusinessId { get; set; }

        [Required]
        public string BusinessName { get; set; } = "";

        [Required]
        public string Location { get; set; } = "";

        public string Bio { get; set; } = "";

        public string ContactNumber { get; set; } = "";

        [ForeignKey("TalentUser")]
        public Guid UserId { get; set; }

        public TalentUser TalentUser { get; set; } = new TalentUser();

    }
}