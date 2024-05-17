using BeautyBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace BeautyBooking.DataAccess
{
    public class BeautyDbContext : DbContext
    {
        public BeautyDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TalentBusiness> TalentBusinesses { get; set; }
        public DbSet<TalentUser> TalentUsers { get; set; }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<TalentBusiness>()
        //         .HasOne(p => p.TalentUser) // Specify the navigation property
        //         .WithMany() // Specify the related entity doesn't have a navigation property back to this entity
        //         .HasForeignKey(p => p.UserId); // Specify the foreign key property
        // }

    }
}
