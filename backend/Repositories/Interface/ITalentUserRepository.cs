using backend.Models.DTOs;

namespace backend.Repositories.Interface
{
    public interface ITalentUserRepository
    {
        Task<TalentUser> GetUserByIdAsync(string userId);
    }
}