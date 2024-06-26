using backend.DataAccess;
using Microsoft.EntityFrameworkCore;
using backend.Models.DTOs;
using backend.Repositories.Interface;

namespace backend.Repositories.Repository
{
    public class TalentUserRepository(BeautyDbContext context) : ITalentUserRepository
    {
        private readonly BeautyDbContext _context = context;

        public async Task<TalentUser> GetUserByIdAsync(string userId) {
            var user = await _context.TalentUser.Where(u => u.UserId == userId).FirstOrDefaultAsync() ?? throw new KeyNotFoundException($"User with id {userId} cannot be found");
            return user;
        }
    }
}